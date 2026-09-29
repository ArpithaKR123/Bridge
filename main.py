from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
import shutil

app = FastAPI(title="BhashaBridge API")

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Upload folder
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


# ---------------- HOME ----------------
@app.get("/")
def home():
    return {
        "message": "BhashaBridge backend is working!"
    }


# ---------------- UPLOAD VIDEO ----------------
@app.post("/upload-video")
async def upload_video(file: UploadFile = File(...)):

    if not file.filename:
        return JSONResponse(
            status_code=400,
            content={"message": "No video selected"}
        )

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return {
            "success": True,
            "message": "Video uploaded successfully",
            "filename": file.filename,
            "path": file_path
        }

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": f"Upload failed: {str(e)}"
            }
        )


# ---------------- TRANSLATION RESULT ----------------
@app.get("/translation-result/{filename}")
def translation_result(filename: str):

    file_path = os.path.join(UPLOAD_DIR, filename)

    if not os.path.exists(file_path):
        return JSONResponse(
            status_code=404,
            content={
                "success": False,
                "message": "Video not found"
            }
        )

    return {
        "success": True,
        "message": "Video is ready for translation",
        "original_video": filename,
        "source_language": "Auto Detect",
        "target_language": "English",
        "subtitle": "Translation will appear here.",
        "voice": "Translated voice will be generated here.",
        "status": "uploaded"
    }