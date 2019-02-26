using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace typescript_marionette.Models
{
    

    [Serializable]
    public class UserModel
    {
        
        public string realName;
        public string alias;
        public int wins;
        public int losses;
        public int userID;
    }
}