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
    public class BlogRepository
    {
        string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

        public List<Blog> GetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var blog = connection.Query<Blog>("Select * from Blog");

                return blog.AsList();
            }

        }

        public Blog GetBlog(int blogId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from Blog
                            where Id =@BlogId";
                var parameters = new
                {
                    BlogId = blogId
                };
                var blog = db.QueryFirst<Blog>(sql, parameters);
                return blog;
            }
        }
        public Blog AddBlog(AddBlogCommand newBlog)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"INSERT INTO [dbo].[Blog]
	                                ([Title]
	                                ,[Article ]
                                    ,[ImageUrl]
                                    ,[UserId])
                                 output inserted.*
                                 VALUES
	                                (@Title
                                    ,@Article 
                                     ,@ImageUrl
                                     ,@UserId)";


                return connection.QueryFirst<Blog>(sql, newBlog);
            }
        }
        public bool DeleteBlog(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"delete
                            from [dbo].[Blog]
	                   WHERE [Id] = @Id";

                
                return connection.Execute(sql, new { Id = id }) == 1;
            }

        }
        public bool UpdateBlog(UpdateBlogCommand updatedBlog)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"UPDATE [dbo].[Blog]
	                            SET [Title] = @Title,
                                    [Article] = @Article,
                                    [ImageUrl] = @ImageUrl
	                        WHERE [Id] = @BlogId";


                return connection.Execute(sql, updatedBlog) == 1;
            }
        }
    }
}
