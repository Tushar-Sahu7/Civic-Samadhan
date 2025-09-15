from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "AI Classifier Service is running"}

# A dummy endpoint for the prototype
@app.post("/classify")
def classify_issue(data: dict):
    description = data.get("description", "").lower()
    category = "General"
    if "garbage" in description or "waste" in description:
        category = "Sanitation"
    elif "pothole" in description or "road" in description:
        category = "Public Works"
    elif "light" in description or "lamp" in description:
        category = "Streetlights"
    
    return {"issue": data, "classified_category": category}
