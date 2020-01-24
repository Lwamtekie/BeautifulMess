using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Article { get; set; }
        public string ImageUrl { get; set; }
        public string UserId { get; set; }
        
    }
}
