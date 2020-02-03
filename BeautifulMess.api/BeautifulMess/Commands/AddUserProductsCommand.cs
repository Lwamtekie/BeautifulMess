using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.Commands
{
    public class AddUserProductsCommand
    {
        public int ProductId { get; set; }
        public int UserId { get; set; }
    }
}
