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
    public class CategoryRepository

    { 
       readonly string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

    public List<Category> GetAll()
    {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var Category = connection.Query<Category>("Select * from Category");

                return Category.AsList();
            }

        }

        public Category GetCategory(int CategoryId)
    {
        using (var db = new SqlConnection(_connectionString))
        {
            var sql = @"select *
                            from [Category]
                            where Id = @CategoryId";
            var parameters = new
            {
                CategoryId = CategoryId
            };
            var Category = db.QueryFirst<Category>(sql, parameters);
            return Category;
        }
    }

    public bool AddCategory(AddCategoryCommand newCategory)
    {
        using (var db = new SqlConnection(_connectionString))
        {
            var sql = @"INSERT INTO [dbo].[Category]
                                       ([Name])
                                 VALUES
                                       (@name)";

            return db.Execute(sql, newCategory) == 1;
        }
    }

    public bool UpdateCategory(Category CategoryToUpdate, int id)
    {
        using (var db = new SqlConnection(_connectionString))
        {
            var sql = @"UPDATE [dbo].[Category]
                               SET [Name] = @name
                             WHERE Id = @id";
                CategoryToUpdate.Id = id;
            return db.Execute(sql, CategoryToUpdate) == 1;
        }
    }


}

       

}

  
    