package ws;

import basicas.Pessoa;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class WebService {

    @GET
    @Produces({MediaType.TEXT_PLAIN})
    public String method1() {
        return "Hello World!";
    }

    @GET
    @Produces({MediaType.APPLICATION_XML})
    @Path("/xml/{nome}/{idade}")
    public Pessoa method2(@PathParam("nome") String nome, @PathParam("idade") Integer idade) {
        return new Pessoa(nome, idade);
    }

    @GET
    @Produces({MediaType.APPLICATION_XML})
    @Path("/querystring")
    public Pessoa method3(@QueryParam("nome") String nome, @QueryParam("idade") Integer idade) {
        return new Pessoa(nome, idade);
    }

    @GET
    @Path("/json/{nome}/{idade}")
    @Produces(MediaType.APPLICATION_JSON)
    public Pessoa method4(@PathParam("nome") String nome, @PathParam("idade") Integer idade) {
        return new Pessoa(nome, idade);
    }

    @POST
    @Path("/plain")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public String method5(@FormParam("mensagem") String mensagem) {
        return "Mensagem recebida: " + mensagem;
    }

    @POST
    @Path("/json")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    public String method6(Pessoa p) {
        return "Nome recebido: " + p.getNome() + "; Idade recebida: " + p.getIdade();
    }

    @POST
    @Path("/xml")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_XML)
    public String method7(Pessoa p) {
        return "Nome recebido: " + p.getNome() + "; Idade recebida: " + p.getIdade();
    }
}
