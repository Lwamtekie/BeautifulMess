using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.Commands
{
    public class UpdateBlogCommand
    {
        public int BlogId { get; set; }
        public string Title { get; set; }
        public string Article { get; set; }
        public string ImageUrl { get; set; }

    }
}
