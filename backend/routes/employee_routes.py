from flask import Blueprint, jsonify
from models.employee import get_all_employees

employee_bp = Blueprint("employees", __name__)

@employee_bp.route("/", methods=["GET"])
def employees():
    return jsonify(get_all_employees())
