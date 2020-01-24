using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.Commands
{
    public class UpdateProductReviewCommand
    {
        public string Comment { get; set; }
        public int Rating { get; set; }
    }
}
