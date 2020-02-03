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
    public class UserBlogRepository
    {
        string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

        public List<UserBlog> GetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var userblog = connection.Query<UserBlog>("Select * from UserBlog");

                return userblog.AsList();
            }

        }

        public UserBlog GetUserBlog(int UserBlogId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from UserBlog
                            where Id =@UserBlogId";
                var parameters = new
                {
                    UserBlogId = UserBlogId
                };
                var userblog = db.QueryFirst<UserBlog>(sql, parameters);
                return userblog;
            }
        }
        public UserBlog AddUserBlog(AddUserBlogCommand newUserBlog)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"INSERT INTO [dbo].[UserBlog]
	                                ([UserId]
	                                ,[BlogId]
                                 output inserted.*
                                 VALUES
	                                (@UserId
                                    ,@BlogId";
                                   


                return connection.QueryFirst<UserBlog>(sql, newUserBlog);
            }
        }
        public bool DeleteUserBlog(UserBlog userblogToDelete, int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"delete
                            from [dbo].[UserBlog]
	                   WHERE [Id] = @Id";

                userblogToDelete.Id = id;

                return connection.Execute(sql, userblogToDelete) == 1;
            }

        }
        
    }
}
