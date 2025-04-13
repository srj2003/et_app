import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the user interface
interface user {
  id: string;
  name: string;
}

const ExpenseForm = () => {
// State variables
  const [userId, setUserId] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseType, setExpenseType] = useState(null);
  const [totalAmount, setTotalAmount] = useState("");
  const [submittedTo, setSubmittedTo] = useState("");
  const [remarks, setRemarks] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState("");
  const [users, setUsers] = useState<{ label: string; value: string }[]>([]);
  const [loadingRoles, setLoadingRoles] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(false);

  // Fetch user ID from AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userid");
        if (storedUserId) {
          setUserId(storedUserId);
        }
      } catch (error) {
        console.error("Failed to fetch user ID from AsyncStorage:", error);
      }
    };

    fetchUserId();
    
  }, []);
  

  // Fetch roles from the backend
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoadingRoles(true);
        const response = await fetch("https://demo-expense.geomaticxevs.in/ET-api/add_expense.php?fetch_roles=true");
        const data = await response.json();

        if (response.ok && data.status === "success" && data.roles) {
          setRoles(data.roles);
        } else {
          Alert.alert("Error", data.message || "Failed to load roles");
        }
      } catch (error) {
        Alert.alert("Error", "Network error. Please try again.");
      } finally {
        setLoadingRoles(false);
      }
    };

    fetchRoles();
  }, []);

  // Fetch users based on the selected role
  useEffect(() => {
    if (selectedRoleId) {
      fetchUsersByRole(selectedRoleId);
    }
  }, [selectedRoleId]);

  // Fetch users by role ID
  const fetchUsersByRole = async (roleId: string): Promise<void> => {
    try {
      setLoadingUsers(true);
      setUsers([]);
      setSubmittedTo("");

      const response = await fetch(`https://demo-expense.geomaticxevs.in/ET-api/add_expense.php?role_id=${roleId}`);
      const data = await response.json();

      if (response.ok && data.status === "success" && data.users) {
        setUsers(data.users.map((user: user) => ({ label: user.name, value: user.id })));
      } else {
        Alert.alert("Error", data.message || "No users found for this role");
      }
    } catch (error) {
      Alert.alert("Error", "Network error. Please try again.");
    } finally {
      setLoadingUsers(false);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!expenseTitle || !expenseType || !totalAmount || !submittedTo) {
      setResponseMessage("Error: Please fill in all required fields.");
      setIsSubmitted(true);
      return;
    }

    const expenseData = {
      expense_track_title: expenseTitle,
      expense_type_id: expenseType,
      expense_total_amount: totalAmount,
      expense_track_submitted_to: submittedTo,
      expense_track_created_by: userId,
      expense_track_app_rej_remarks: remarks,
    };

    try {
      const response = await fetch("https://demo-expense.geomaticxevs.in/ET-api/add_expense.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expenseData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setResponseMessage(result.message);
        setIsSubmitted(true);

        // Reset all fields to their default state
        setExpenseTitle("");
        setExpenseType(null); // Reset Expense Type
        setTotalAmount("");
        setSubmittedTo("");
        setRemarks("");
        setSelectedRoleId(""); // Reset Recipient Role
        setUsers([]);
      } else {
        setResponseMessage(result.message || "Failed to submit expense");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error: Network error. Please try again.");
      setIsSubmitted(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>New Expense</Text>

        {/* Expense Title */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Expense Title *</Text>
          <TextInput
            style={styles.input}
            value={expenseTitle}
            onChangeText={setExpenseTitle}
            placeholder="Enter Expense Title"
          />
        </View>

        {/* Expense Type */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Expense Type *</Text>
          <RNPickerSelect
            onValueChange={(value) => setExpenseType(value)}
            items={[
              { label: "Transport", value: 1 },
              { label: "Food", value: 2 },
              { label: "Accommodation", value: 3 },
            ]}
            value={expenseType}
            placeholder={{ label: "Select Expense Type", value: null }}
            style={pickerSelectStyles}
          />
        </View>

        {/* Total Amount */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Total Amount *</Text>
          <TextInput
            style={styles.input}
            value={totalAmount}
            onChangeText={setTotalAmount}
            placeholder="Enter Total Amount"
            keyboardType="numeric"
          />
        </View>

        {/* Recipient Role */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Recipient Role *</Text>
          {loadingRoles ? (
            <ActivityIndicator size="small" color="#007AFF" />
          ) : (
            <RNPickerSelect
              onValueChange={(value) => setSelectedRoleId(value)}
              items={roles}
              value={selectedRoleId}
              placeholder={{ label: "Select a role...", value: null }}
              style={pickerSelectStyles}
            />
          )}
        </View>

        {/* Recipient Name */}
        {selectedRoleId && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Recipient Name *</Text>
            {loadingUsers ? (
              <ActivityIndicator size="small" color="#007AFF" />
            ) : (
              <RNPickerSelect
                onValueChange={(value) => setSubmittedTo(value)}
                items={users}
                value={submittedTo}
                placeholder={{ label: "Select a recipient...", value: null }}
                style={pickerSelectStyles}
              />
            )}
          </View>
        )}

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Expense</Text>
        </TouchableOpacity>

        {/* Response Message */}
        {isSubmitted && <Text style={styles.responseMessage}>{responseMessage}</Text>}
      </View>
    </ScrollView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    color: "#333",
    backgroundColor: "#fff",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    color: "#333",
    backgroundColor: "#fff",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  form: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#666",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  responseMessage: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});

export default ExpenseForm;