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
    public class UserRepository
    {
        readonly string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

        public List<User> GetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                
                var user = connection.Query<User>("Select * from [User]");

                return user.AsList();
            }

        }

        public User GetUser(int userId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from [User]
                            where Id =@UserId";
                var parameters = new
                {
                    UserId = userId
                };
                var user = db.QueryFirst<User>(sql, parameters);
                return user;
            }
        }
        public User AddUser(AddUserCommand newUser)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"INSERT INTO [dbo].[User]
	                                ([Name]
	                                ,[Email])
                                 output inserted.*
                                 VALUES
	                                (@Name
                                    ,@Email)";


                return connection.QueryFirst<User>(sql, newUser);
            }
        }
        public bool DeleteUser(User userToDelete, int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"delete
                            from [dbo].[User]
	                   WHERE [Id] = @id";

                userToDelete.Id = id;

                return connection.Execute(sql, userToDelete) == 1;
            }

        }
        public bool UpdateUser(User UserToUpdate, int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"UPDATE [dbo].[User]
	                            SET [Name] = @name,
                                    [Email] = @email
	                        WHERE [Id] = @id";

                 UserToUpdate.Id = id;

                return connection.Execute(sql, UserToUpdate) == 1;
            }
        }
    }
}
