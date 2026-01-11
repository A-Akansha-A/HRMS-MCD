from flask import Blueprint, jsonify
from models.grievance import get_grievances

grievance_bp = Blueprint("grievance", __name__)

@grievance_bp.route("/", methods=["GET"])
def grievance():
    return jsonify(get_grievances())
