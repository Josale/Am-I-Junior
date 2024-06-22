using junApi.Data;
using junApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace junApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class QuestionControllers : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public QuestionControllers(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Question>>> GetQuestions()
        {
            return _context.Questions.Include(q =>
            q.Answers).ToList();
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Question>> GetQuestion(int id)
        {
            var que = await _context.Questions.Include(q =>
            q.Answers).FirstOrDefaultAsync(q =>
            q.Id == id);

            if (que == null)
            {
                return NotFound();
            }

            return Ok(que);
        }

        [HttpPost]

        public async Task<ActionResult<Question>> PostQuestion(Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetQuestion), new { id = question.Id }, question);
        }
    }
}
