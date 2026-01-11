from flask import Blueprint, jsonify
from models.attendance import get_attendance_records

attendance_bp = Blueprint("attendance", __name__)

@attendance_bp.route("/", methods=["GET"])
def attendance():
    return jsonify(get_attendance_records())
