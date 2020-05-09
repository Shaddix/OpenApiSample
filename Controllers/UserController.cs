using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace OpenApiSample.Controllers
{
    public enum Sex
    {
        Male,
        Female
    }

    public class UserDto
    {
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public Sex Sex { get; set; }
    }

    public class UserUpdateDto : PatchDtoBase
    {
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public Sex Sex { get; set; }
    }

    public abstract class PatchDtoBase
    {
    }

    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public UserDto Get(int id)
        {
            return new UserDto()
            {
                Name = "Artur",
                BirthDate = new DateTime(1985, 5, 12),
                Sex = Sex.Male,
            };
        }

        [HttpPatch]
        public void Patch(int userId, UserUpdateDto updateDto)
        {
            //perform patch procedure
        }
    }
}