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

        public UserProducts GetUserProducts(int UserProductsId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from [UserProducts]
                            where Id =@UserProductsId";
                var parameters = new
                {
                    UserProductsId = UserProductsId
                };
                var userproducts = db.QueryFirst<UserProducts>(sql, parameters);
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
        public bool DeleteUserProducts(UserProducts userproductsToDelete, int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"delete
                            from [dbo].[UserProducts]
	                   WHERE [Id] = @id";

                userproductsToDelete.Id = id;

                return connection.Execute(sql, userproductsToDelete) == 1;
            }

        }
        
    }
}


