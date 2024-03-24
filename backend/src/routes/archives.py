from fastapi import APIRouter, Form, HTTPException
import pandas as pd
import base64
import io


router = APIRouter()


@router.post("/v1/api/upload")
async def createFile(
  file_type: str = Form(...),
  data_File: str = Form(...),
):
try:
  decoded_file= base64.b64decode(data_File)
  file_buffer = io.BytesIO(decoded_file)

  if(file_type == "csv")
    df = pd.read_csv(file_buffer)
  elif
    df = pd.read_excel(file_buffer)
  else:
    raise HTTPException(status_code=400, detail="Arquivo inválido")