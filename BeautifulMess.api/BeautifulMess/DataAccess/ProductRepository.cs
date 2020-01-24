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
    public class ProductRepository
    {
        readonly string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

        public List<Product> GetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var products = connection.Query<Product>("Select * from Product");

                return products.AsList();
            }

        }

        public Product GetProduct(int productId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from Product
                            where Id =@ProductId";
                var parameters = new
                {
                    ProductId = productId
                };
                var product = db.QueryFirst<Product>(sql, parameters);
                return product;
            }
        }

        public Product AddProduct(AddProductCommand newProduct)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"INSERT INTO [dbo].[Product]
	                                ([Name]
	                                ,[Price]
                                    ,[Store]
                                    ,[ImageUrl]
                                    ,[CategoryId] )
                                 output inserted.*
                                 VALUES
	                                (@Name
                                    ,@Price
                                    ,@Store
                                    ,@ImageUrl
                                    ,@CategoryId)";


                return connection.QueryFirst<Product>(sql, newProduct);
            }
        }
        public bool DeleteProduct(Product productToDelete, int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"delete
                            from [dbo].[Product]
	                   WHERE [Id] = @Id";

                productToDelete.Id = id;

                return connection.Execute(sql, productToDelete) == 1;
            }

        }

        public bool UpdateProduct(Product ProductToUpdate, int id )
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"UPDATE [dbo].[Product]
	                            SET [Name] = @name,
                                    [Price] = @price,
                                    [Store] = @store,
                                    [ImageUrl] = @imageurl,
                                    [CategoryId] = @categoryid 
	                        WHERE [Id] = @id";

                ProductToUpdate.Id = id;

                return connection.Execute(sql, ProductToUpdate) == 1;
            }
        }
    }
}
    
