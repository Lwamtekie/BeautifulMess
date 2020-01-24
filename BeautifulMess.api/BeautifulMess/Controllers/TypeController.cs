using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeautifulMess.Commands;
using BeautifulMess.DataAccess;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace BeautifulMess.Controllers
{
    [Route("api/types")]
    [ApiController]
    public class TypeController : ControllerBase
    {
        // GET: api/Types
        [HttpGet]
        public IEnumerable<Type> GetAll()
        {
            var repo = new TypeRepository();
            return repo.GetAllTypes();
        }

        // GET: api/productTypes/1
        [HttpGet("{TypeId}")]
        public Type Get(int TypeId)
        {
            var repo = new TypeRepository();
            return repo.GetType(TypeId);
        }

        // POST: api/productTypes
        [HttpPost]
        public void Create(AddTypeCommand newType)
        {
            var repo = new TypeRepository();
            repo.AddType(newType);
        }

        // PUT: api/Types/5
        [HttpPut("{id}")]
        public void Update(UpdateTypeCommand updatedTypeCommand, int id)
        {
            var repo = new TypeRepository();
            var updatedType = new Type
            {
                
                
                
                Name = updatedTypeCommand.Name,
            };
            repo.UpdateType(updatedType, id);
        }


    }
}