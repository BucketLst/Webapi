using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1
{
    public class AuthRepository : IDisposable
    {
       public AuthRepository()
        {
            
        }

        public UserModel FindUser(string userName, string password)
        {
            return new UserModel("karthik", "101", "");
        }


        public void Dispose()
        {
           
        }
    }
}