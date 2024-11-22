export const getOvrScoreInsights = (ovrScore) => {
    if (ovrScore >= 80) {
        return {
            grade: 'Excellent',
            color: '#16A34A',
            insight: "Region performs excellently across all sustainability indicators. Infrastructure, economy, and population dynamics are well-balanced and optimized.",
        };
    } else if (ovrScore >= 60) {
        return {
            grade: 'Good',
            color: '#86EFAC',
            insight: "Region has a strong foundation but may have slight deficiencies in one or two indicators, requiring targeted interventions.",
        };
    } else if (ovrScore >= 40) {
        return {
            grade: 'Average',
            color: '#FACC15',
            insight: "Sustainability is moderate. Issues in one or more indicators could impact the region's overall stability and quality of life.",
        };
    } else if (ovrScore >= 20) {
        return {
            grade: 'Poor',
            color: '#FB923C',
            insight: "Significant sustainability issues in one or more areas. Requires immediate policy action and investment to improve livability.",
        };
    } else if (ovrScore < 20) {
        return {
            grade: 'Critical',
            color: '#B91C1C',
            insight: "Severe challenges across most indicators. The region is likely underdeveloped or struggling with critical issues like poor infrastructure, lack of jobs, or inadequate healthcare.",
        };
    } else {
        return {
            grade: 'Unknown',
            color: '#343A40',
            insight: "Error: Invalid OVR Score"
        }
    }
};