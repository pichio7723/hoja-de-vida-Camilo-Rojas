# Proyecto Hoja de Vida - Camilo Rojas

Este proyecto es **fullstack**:  
- **Backend** con [FastAPI](https://fastapi.tiangolo.com/)  
- **Frontend** con [React + Vite](https://vitejs.dev/)

---

## 🚀 Requisitos previos
- Python 3.10+ instalado
- Node.js 18+ y npm
- Git

---

## ⚙️ Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/hoja-de-vida-Camilo-Rojas.git
cd hoja-de-vida-Camilo-Rojas


## Comandos para instalar backend
cd backend
python -m venv venv
source venv/Scripts/activate   # En Git Bash
# o backend\venv\Scripts\Activate.ps1   # En PowerShell

#cuando el venv este activado
pip install -r requirements.txt

#si toca manual
pip install fastapi uvicorn
uvicorn main:app --reload


#para frontend
cd frontend
npm install
npm run dev

#comando de extencion
npm install react-router-dom
npm install react-pdf
npm install react-icons

