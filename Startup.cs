using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NSwag;
using NSwag.Generation.Processors.Security;
using OpenApiSample.Swagger;

namespace OpenApiSample
{
    public class Startup
    {
        private SwashbuckleConfigurator _swashbuckleConfigurator;
        private NSwagConfigurator _nswagConfigurator;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            _swashbuckleConfigurator = new SwashbuckleConfigurator(configuration);
            _nswagConfigurator = new NSwagConfigurator(configuration);
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            _nswagConfigurator.AddSwagger(services);
            _swashbuckleConfigurator.AddSwagger(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();
            
            _nswagConfigurator.UseSwagger(app);
            _swashbuckleConfigurator.UseSwagger(app);
            
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
            
        }
    }
}