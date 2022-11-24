using Microsoft.EntityFrameworkCore;
using vStore.API.Data;
using vStore.API.Extension;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// sqlserver connections
builder.Services.AddDbContext<StoreContext>(x =>
{
    x.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    //custom extension method to seed the DB
    //configure other services

    app.UseItToSeedSqlServer();    
}

app.UseAuthorization();

app.MapControllers();

app.Run();
