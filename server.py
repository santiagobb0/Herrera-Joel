from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse

class Handler(BaseHTTPRequestHandler):

    # Manejo del formulario (POST)
    def do_POST(self):
        if self.path == "/contacto":
            length = int(self.headers['Content-Length'])
            data = self.rfile.read(length).decode()
            params = urllib.parse.parse_qs(data)

            nombre = params.get("nombre", [""])[0]
            correo = params.get("correo", [""])[0]
            mensaje = params.get("mensaje", [""])[0]

            # Mostrar datos en consola (evidencia para el profesor)
            print("Formulario recibido:")
            print("Nombre:", nombre)
            print("Correo:", correo)
            print("Mensaje:", mensaje)
            print("-" * 30)

            # 🔁 REDIRECCIÓN CORRECTA
            self.send_response(303)
            self.send_header("Location", "/contacto.html")
            self.end_headers()

    # Permitir servir archivos HTML, CSS, JS
    def do_GET(self):
        if self.path == "/":
            self.path = "/index.html"

        try:
            with open(self.path[1:], "rb") as file:
                self.send_response(200)
                self.send_header("Content-type", self.get_content_type())
                self.end_headers()
                self.wfile.write(file.read())
        except FileNotFoundError:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"Archivo no encontrado")

    def get_content_type(self):
        if self.path.endswith(".html"):
            return "text/html"
        elif self.path.endswith(".css"):
            return "text/css"
        elif self.path.endswith(".js"):
            return "application/javascript"
        elif self.path.endswith(".png"):
            return "image/png"
        elif self.path.endswith(".jpg") or self.path.endswith(".jpeg"):
            return "image/jpeg"
        return "text/plain"


server = HTTPServer(("localhost", 8000), Handler)
print("Servidor activo en http://localhost:8000")
server.serve_forever()