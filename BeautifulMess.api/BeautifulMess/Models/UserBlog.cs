using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.Models
{
    public class UserBlog
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BlogId { get; set; }
    }
}
