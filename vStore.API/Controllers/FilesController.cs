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

        [HttpPost("Download/{id}")]
        public async Task<ActionResult> Download(int id)
        {
            var result = new List<FileUploadResult>();
            var filePath = Path.Combine(@"UploadedFiles", id.ToString(), @"files");
            var files = Directory.GetFiles(filePath);

            foreach (var file in files)
            {
                var fileInfo = new FileInfo(file);
                result.Add(new FileUploadResult { FileName = fileInfo.Name, FileSize = fileInfo.Length });
            }

            _logger.LogInformation($"The files for [{id}] was downloaded.].");

            return Ok(result);
        }


        [HttpGet("Download/{id}/{fileName}")]
        public async Task<ActionResult> GetFileById(int id, string fileName)
        {
            var filePath = Path.Combine(@"UploadedFiles", id.ToString(), @"files", fileName);
            var fileInfo = new FileInfo(filePath);

            if (!fileInfo.Exists)
                return NotFound();

            var memory = new MemoryStream();
            await using var stream = new FileStream(filePath, FileMode.Open);
            await stream.CopyToAsync(memory);
            memory.Position = 0;

            _logger.LogInformation($"The file [{fileName}] for [{id}] was downloaded.].");

            return File(memory, Path.GetFileName(filePath));
        }


    }
}
