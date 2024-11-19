from pydantic import BaseModel

class ToDoBase(BaseModel):
    title: str
    description: str

class ToDoCreate(ToDoBase):
    pass

class ToDoUpdate(ToDoBase):
    pass

class ToDoResponse(ToDoBase):
    id: int
    origin_ip: str

    class Config:
        orm_mode = True
