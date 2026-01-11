from flask import Blueprint, jsonify
from models.payroll import get_payroll_records

payroll_bp = Blueprint("payroll", __name__)

@payroll_bp.route("/", methods=["GET"])
def payroll():
    return jsonify(get_payroll_records())
