from sqlalchemy import Column, Integer, String
from .database import Base

class ToDo(Base):
    __tablename__ = "todos"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(20), nullable=False)
    description = Column(String(100), nullable=False)
    origin_ip = Column(String(45), nullable=False)
