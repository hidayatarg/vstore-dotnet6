using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using vStore.API.Entities;

namespace vStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly ILogger<FilesController> _logger;

        public FilesController(ILogger<FilesController> logger)
        {
            _logger = logger;
        }

        [HttpPost("PostFile")]
        public async Task<ActionResult> PostFile(int id, List<IFormFile> files)
        {
            var result = new List<FileUploadResult>();

            if (files == null || files.Count == 0)
                return BadRequest("No file is uploaded.");

            foreach (var file in files)
            {
                if (file.Length <= 0) 
                    return BadRequest($"File size cannot be {file.Length}");
                
                var filePath = Path.Combine(@"UploadedFiles", id.ToString(), @"files", file.FileName);
                // var filePath = Path.Combine(_hostingEnvironment.ContentRootPath, subDirectory);

                new FileInfo(filePath).Directory?.Create();
                await using var stream = new FileStream(filePath, FileMode.Create);

                await file.CopyToAsync(stream);

                _logger.LogInformation($"The uploaded file [{file.FileName}] is saved as [{filePath}].");
                result.Add(new FileUploadResult { FileName = file.FileName, FileSize = file.Length });
            }

            return Ok(result);
        }
    }
}
