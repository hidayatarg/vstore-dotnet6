using Microsoft.EntityFrameworkCore;
using vStore.API.Data;

namespace vStore.API.Extension
{
    public static class DbInitializerExtension
    {
        public static IApplicationBuilder UseItToSeedSqlServer(this IApplicationBuilder app)
        {
            ArgumentNullException.ThrowIfNull(app, nameof(app));

            using var scope = app.ApplicationServices.CreateScope();
            var services = scope.ServiceProvider;
           
            try
            {
                var context = services.GetRequiredService<StoreContext>();
                context.Database.Migrate();
                StoreSeed.Seed(context);
            }
            catch (Exception ex)
            {
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An error occured while seeding the database");
            }

            return app;
        }
    }
}