package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"
	"github.com/KarolSirati/curriculo-portfolio/backend/internal/models"
)

func Health(w http.ResponseWriter, _ *http.Request) { writeJSON(w, http.StatusOK, map[string]string{"status":"ok"}) }

func Contact(w http.ResponseWriter, r *http.Request) {
	var message models.ContactMessage
	decoder := json.NewDecoder(http.MaxBytesReader(w, r.Body, 1<<20))
	if err := decoder.Decode(&message); err != nil { writeJSON(w, http.StatusBadRequest, map[string]string{"error":"Dados inválidos"}); return }
	message.Name = strings.TrimSpace(message.Name); message.Email = strings.TrimSpace(message.Email); message.Message = strings.TrimSpace(message.Message)
	if message.Name == "" || !strings.Contains(message.Email, "@") || len(message.Message) < 10 { writeJSON(w, http.StatusUnprocessableEntity, map[string]string{"error":"Preencha os campos corretamente"}); return }
	log.Printf("Nova mensagem: nome=%q email=%q", message.Name, message.Email)
	writeJSON(w, http.StatusCreated, map[string]string{"message":"Mensagem recebida"})
}

func writeJSON(w http.ResponseWriter, status int, payload any) { w.Header().Set("Content-Type", "application/json"); w.WriteHeader(status); _ = json.NewEncoder(w).Encode(payload) }
