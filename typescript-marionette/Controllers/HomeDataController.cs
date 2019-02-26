using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using typescript_marionette.Models;

namespace typescript_marionette.Controllers
{
    public class HomeDataController : ApiController
    {
        [Route("api/dataservices")]
        [HttpGet]
        public HttpResponseMessage GetDataTable()
        {
            return Request.CreateResponse<IEnumerable<string>>(HttpStatusCode.OK, GetData());
        }

        public List<string> GetData()
        {
            return new List<string> {"test1", "test2"};
        }

    }
}
