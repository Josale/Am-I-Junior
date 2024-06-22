using junApi.Data;
using junApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace junApi.Controllers
{
    [Route("api/[controller]")]

    public class AnswerController : Controller
    {
        private readonly ApplicationDbContext _context;
        public AnswerController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<Answer>>> GetAnswers()
        {
            return await _context.Answers.ToListAsync();
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<List<Answer>>> GetAnswer(int id)
        {
            var answer = await _context.Answers.FindAsync(id);

            if (answer == null)
            {
                return NotFound();
            }

            return Ok(answer);
        }

        [HttpPost]

        public async Task<ActionResult<List<Answer>>> PostAnswer(Answer answer)
        {
            _context.Answers.Add(answer);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostAnswer), new { id = answer.Id }, answer);
        }
    }
}