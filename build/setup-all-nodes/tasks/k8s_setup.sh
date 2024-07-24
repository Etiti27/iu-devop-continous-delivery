#!/bin/bash
 sudo apt-get update
 sudo apt-get install -y apt-transport-https ca-certificates curl gpg

# Download and install Kubernetes APT key
sudo curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.30/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

# Add Kubernetes APT repository
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.30/deb/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/kubernetes.list > /dev/null

# Update package list and install Kubernetes packages
sudo apt-get update -y
sudo apt-get install -y kubeadm kubectl kubelet
sudo apt-mark hold kubelet kubeadm kubectl
sudo systemctl enable --now kubelet