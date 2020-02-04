using BeautifulMess.Commands;
using BeautifulMess.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.DataAccess
{
    public class UserProductsRepository

    {
        readonly string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

        public List<UserProducts> GetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();


                var userproducts = connection.Query<UserProducts>("Select * from [UserProducts]");

                return userproducts.AsList();
            }

        }

        public IEnumerable<Product> GetUserProducts(int userId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from Product
                            join UserProducts on Product.Id = UserProducts.ProductId
                            where UserProducts.UserId = @userId";
                var parameters = new
                {
                    userId = userId
                };
                var userproducts = db.Query<Product>(sql, parameters);
                return userproducts;
            }
        }



        public UserProducts AddUserProducts(AddUserProductsCommand newUserProducts)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"INSERT INTO [dbo].[UserProducts]
	                                ([ProductId]
	                                ,[UserId])
                                 output inserted.*
                                 VALUES
	                                (@ProductId
                                    ,@UserId)";


                return connection.QueryFirst<UserProducts>(sql, newUserProducts);
            }
        }
        public bool DeleteUserProducts(int userProductId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"delete
                            from [dbo].[UserProducts]
	                   WHERE [Id] = @userProductId";

                var parameters = new
                {
                    userProductId = userProductId
                };

                return connection.Execute(sql, parameters) == 1;
            }

        }
        
    }
}


