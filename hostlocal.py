import http.server
import socketserver
import webbrowser
import threading
import time

# Define the handler
Handler = http.server.SimpleHTTPRequestHandler

# Function to open the web browser
def open_browser(port):
    time.sleep(1)  # Wait for the server to start
    webbrowser.open_new(f'http://localhost:{port}/home')

# Set up the server in a new thread
def start_server():
    
    with socketserver.TCPServer(("", 0), Handler) as httpd:
        # Automatically find a free port
        port = httpd.server_address[1]
        print(f"Serving at port {port}")
        # Start the browser after finding the port
        browser_thread = threading.Thread(target=open_browser, args=(port,))
        browser_thread.daemon = True
        browser_thread.start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("Server is shutting down...")
        finally:
            httpd.server_close()
            print("Server closed.")

# Start the server thread
server_thread = threading.Thread(target=start_server)
server_thread.daemon = True
server_thread.start()

# Keep the main thread alive until the server thread is done
try:
    while server_thread.is_alive():
        server_thread.join(1)
except KeyboardInterrupt:
    print("Received keyboard interrupt. Exiting...")
