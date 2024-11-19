from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import requests
from .. import crud, schemas, models, database

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/tasks", response_model=list[schemas.ToDoResponse])
def get_tasks(db: Session = Depends(get_db)):
    return crud.get_todos(db)

@router.post("/tasks", response_model=schemas.ToDoResponse)
def create_task(todo: schemas.ToDoCreate, db: Session = Depends(get_db)):
    ip = requests.get("https://api.ipify.org").text
    return crud.create_todo(db, todo, ip)

@router.put("/tasks/{todo_id}", response_model=schemas.ToDoResponse)
def update_task(todo_id: int, todo: schemas.ToDoUpdate, db: Session = Depends(get_db)):
    updated_todo = crud.update_todo(db, todo_id, todo)
    if not updated_todo:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated_todo

@router.delete("/tasks/{todo_id}")
def delete_task(todo_id: int, db: Session = Depends(get_db)):
    deleted_todo = crud.delete_todo(db, todo_id)
    if not deleted_todo:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"message": "Task deleted successfully"}
