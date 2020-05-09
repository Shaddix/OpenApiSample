using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;

namespace OpenApiSample.Swagger
{
    public class SwashbuckleConfigurator
    {
        public SwashbuckleConfigurator(IConfiguration configuration)
        {
            SwaggerOptions = configuration.GetSection("Swagger").Get<Settings.SwaggerOptions>();
            SwaggerOptions.Endpoint.Url = $"/swashbuckle{SwaggerOptions.Endpoint.Url}";
            SwaggerOptions.Endpoint.UiUrl = $"/swashbuckle{SwaggerOptions.Endpoint.UiUrl}";
        }

        private Settings.SwaggerOptions SwaggerOptions { get; set; }

        public virtual void AddSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(
                c =>
                {
                    c.SwaggerDoc(
                        "v1",
                        new OpenApiInfo()
                        {
                            Version = SwaggerOptions.Version,
                            Title = SwaggerOptions.Title,
                            Description = SwaggerOptions.Description,
                            Contact = new OpenApiContact()
                            {
                                Email = SwaggerOptions.Contact.Email
                            },
                            License = new OpenApiLicense()
                            {
                                Name = SwaggerOptions.License.Name
                            }
                        });

                    c.AddSecurityDefinition(
                        "Bearer",
                        new OpenApiSecurityScheme()
                        {
                            Description =
                                "JWT Authorization header using the Bearer scheme. ",
                            Name = "Authorization",
                            In = ParameterLocation.Header,
                            Type = SecuritySchemeType.ApiKey,
                        });
                });
        }

        public virtual void UseSwagger(IApplicationBuilder app)
        {
            if (!SwaggerOptions.Enabled)
            {
                return;
            }

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger(
                x =>
                {
                    x.RouteTemplate = SwaggerOptions.Endpoint.Url.Replace("v1", "{documentName}");
                });

            // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)
            app.UseSwaggerUI(
                c =>
                {
                    c.RoutePrefix = SwaggerOptions.Endpoint.UiUrl.Trim('/');
                    c.SwaggerEndpoint(SwaggerOptions.Endpoint.Url, SwaggerOptions.Endpoint.Name);
                    c.OAuthClientId("swaggerui");
                    c.OAuthClientSecret("secret");
                });
        }
    }
}