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
    public class TypeRepository

    { 
       string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

    public List<Type> GetAll()
    {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var type = connection.Query<Type>("Select * from Type");

                return type.AsList();
            }

        }

        public Type GetType(int TypeId)
    {
        using (var db = new SqlConnection(_connectionString))
        {
            var sql = @"select *
                            from [Type]
                            where Id = @TypeId";
            var parameters = new
            {
                TypeId = TypeId
            };
            var Type = db.QueryFirst<Type>(sql, parameters);
            return Type;
        }
    }

    public bool AddType(AddTypeCommand newType)
    {
        using (var db = new SqlConnection(_connectionString))
        {
            var sql = @"INSERT INTO [dbo].[Type]
                                       ([Name])
                                 VALUES
                                       (@name)";

            return db.Execute(sql, newType) == 1;
        }
    }

    public bool UpdateType(Type TypeToUpdate, int id)
    {
        using (var db = new SqlConnection(_connectionString))
        {
            var sql = @"UPDATE [dbo].[Type]
                               SET [Name] = @name
                             WHERE Id = @id";
            TypeToUpdate.Id = id;
            return db.Execute(sql, TypeToUpdate) == 1;
        }
    }


}

       

}

  
    