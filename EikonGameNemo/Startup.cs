using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EikonGameNemo.Startup))]
namespace EikonGameNemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
