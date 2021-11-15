using API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("errors/{code}")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController
    {
        public IActionResult Error(int code, string message)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}