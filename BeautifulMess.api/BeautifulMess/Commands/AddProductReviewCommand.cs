using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.Commands
{
    public class AddProductReviewCommand
    {
        public string Comment { get; set; }
        public int Rating { get; set; }
        public int ProductId { get; set; }
        public string UserName { get; set; }

    }
}
