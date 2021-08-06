package oracle

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

func GetCoinPrice(symbol string) float64 {
	client := &http.Client{}
	req, err := http.NewRequest("GET", "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest", nil)
	if err != nil {
		log.Fatal(err)
	}

	q := url.Values{}
	q.Add("symbol", symbol)

	req.Header.Set("Accepts", "application/json")
	req.Header.Add("X-CMC_PRO_API_KEY", "5cef7906-4a7b-4ace-94ec-dd92b98544e9")
	req.URL.RawQuery = q.Encode()

	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	respBody, _ := ioutil.ReadAll(resp.Body)
	var result map[string]interface{}
	json.Unmarshal([]byte(respBody), &result)
	data := result["data"].(map[string]interface{})
	crypto := data[symbol].(map[string]interface{})
	quote := crypto["quote"].(map[string]interface{})
	usd := quote["USD"].(map[string]interface{})
	var price float64
	for key, value := range usd {
		if key == "price" {
			price = value.(float64)
			break
		}
	}
	return price
}
