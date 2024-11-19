from sqlalchemy.orm import Session
from . import models, schemas

def get_todos(db: Session):
    return db.query(models.ToDo).all()

def create_todo(db: Session, todo: schemas.ToDoCreate, ip: str):
    db_todo = models.ToDo(**todo.dict(), origin_ip=ip)
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo

def update_todo(db: Session, todo_id: int, todo: schemas.ToDoUpdate):
    db_todo = db.query(models.ToDo).filter(models.ToDo.id == todo_id).first()
    if db_todo:
        db_todo.title = todo.title
        db_todo.description = todo.description
        db.commit()
        db.refresh(db_todo)
    return db_todo

def delete_todo(db: Session, todo_id: int):
    db_todo = db.query(models.ToDo).filter(models.ToDo.id == todo_id).first()
    if db_todo:
        db.delete(db_todo)
        db.commit()
    return db_todo
