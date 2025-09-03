from datetime import datetime
from typing import Optional

from odmantic import Model, Field, ObjectId


class Note(Model):
    __collection__ = "notes"
    title: str
    content: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
