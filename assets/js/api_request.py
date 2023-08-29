import requests

def main():
    # URL de la API que deseas consultar
    api_url = "https://digimon-api.vercel.app/api/digimon"

    # Realiza una solicitud GET a la API
    response = requests.get(api_url)

    # Verifica si la solicitud fue exitosa (código de estado 200)
    if response.status_code == 200:
        # Obtén los datos en formato JSON de la respuesta
        data = response.json()

        # Obtén los primeros 2 registros
        first_2_records = data[:2]

        # Imprime los primeros 2 registros
        for record in first_2_records:
            print(record)
    else:
        print("Error al hacer la solicitud a la API. Código de estado:", response.status_code)

if __name__ == "__main__":
    main()

