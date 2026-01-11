document.addEventListener('DOMContentLoaded', () => {
    
    // View Profile Action
    const viewProfile = document.getElementById('viewProfile');
    if(viewProfile) {
        viewProfile.onclick = function() {
            // Redirect to a profile page
            window.location.href = 'profile.html';
        };
    }

    // Submit Grievance Action
    const submitGrievance = document.getElementById('submitGrievance');
    if(submitGrievance) {
        submitGrievance.onclick = function() {
            window.location.href = 'grievance.html';
        };
    }

    // Grievance Status Action
    const grievanceStatus = document.getElementById('grievanceStatus');
    if(grievanceStatus) {
        grievanceStatus.onclick = function() {
                    window.location.href = "grievance-status.html";
        };
    }
});