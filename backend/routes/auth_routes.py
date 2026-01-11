from flask import Blueprint, request, jsonify
from models.user import get_user_by_username

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = get_user_by_username(data.get("username"))

    if user:
        return jsonify({
            "message": "Login successful",
            "user": user
        })

    return jsonify({"message": "Invalid username"}), 401
